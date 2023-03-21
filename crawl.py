import os
from django.shortcuts import render
import requests
from bs4 import BeautifulSoup as bs
import shutil 
import psycopg2
import pyshorteners as sh
from selenium import webdriver
import selenium.webdriver
from webdriver_manager.firefox import GeckoDriverManager


conn = psycopg2.connect(
host="localhost",
database="be_the_best",
user="saikat123",
password="1234")

s = sh.Shortener()

page = requests.get("https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&marketplace=FLIPKART&page=1")
p=1
while(True):
   if p > 30:
      break

   driver = webdriver.Firefox(executable_path=GeckoDriverManager().install())
   # driver = webdriver.Firefox()
   driver.get("https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&marketplace=FLIPKART&page="+str(p))
   links = [my_elem.get_attribute("href") for my_elem in driver.find_elements_by_css_selector("a._1fQZEK")]
   # print("\n\n")
   # print("\n\n")
   driver.quit()
   for lnk in links :
      # print(links)
      # print("\n\n")
      page = requests.get(lnk)
      soup = bs(page.content, "html.parser")
      Name = soup.find("span" , attrs={"class":"B_NuCI"})
      Price = soup.find("div" , attrs={"class":"_30jeq3 _16Jk6d"})
      Details_Data = soup.find_all("li", attrs={"class":"_21lJbe"})
      Details_Data_Type = soup.find_all("td", attrs={"class":"_1hKmbr"})
      Image = soup.find("img", attrs={"class":"_396cs4"})
      Star = soup.find("div" , attrs={"class":"_3LWZlK"})
      Rating = soup.find("span" , attrs={"class":"_2_R_DZ"})

      image_url = Image.get("src")
      # Open the url image, set stream to True, this will return the stream content.
      r = requests.get(image_url, stream = True)
     
      # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
      r.raw.decode_content = True
      
      # Open a local file with wb ( write binary ) permission.
      image_name = Name.get_text().replace(' ', '_').replace('/', '').replace(',', '').replace('  ', '_') + '.jpg'
      with open('image/'+ image_name,'wb') as f:
         shutil.copyfileobj(r.raw,  f)

      k=0

      name = Name.get_text().replace(")",'').replace("(",'').replace(",",' ')
      for k in range(len(Details_Data_Type)):
         if Details_Data_Type[k].get_text() == 'In The Box':
            In_The_Box = Details_Data[k].get_text()
         if Details_Data_Type[k].get_text() == 'Display Size':
            # print(Details_Data[k].get_text())
            Display_Size = Details_Data[k].get_text()
         if Details_Data_Type[k].get_text() == 'Processor Type':
            # print(Details_Data[k].get_text())
            Processor_Type = Details_Data[k].get_text()+' '
         if Details_Data_Type[k].get_text() == 'Processor Core':
            # print(Details_Data[k].get_text())
            Processor_Core = Details_Data[k].get_text()
         if Details_Data_Type[k].get_text() == 'Internal Storage':
            # print(Details_Data[k].get_text().replace(' ', '').replace('GB', '').strip())
            Internal_Storage = Details_Data[k].get_text().replace(' ', '').replace('MB', '').replace('GB', '').strip()
         if Details_Data_Type[k].get_text() == 'RAM':
            # print(Details_Data[k].get_text().replace(' ', '').replace('GB', '').strip())
            RAM = Details_Data[k].get_text().replace(' ', '').replace('GB', '').replace('MB', '').strip()
         if Details_Data_Type[k].get_text() == 'Expandable Storage':
            # print(Details_Data[k].get_text().replace(' ', '').replace('GB', '').strip())
            expandable_storage = Details_Data[k].get_text().replace('GB', '').replace('MB', '').replace('TB', '').strip()
         if Details_Data_Type[k].get_text() == 'Primary Camera':
            # print(Details_Data[k].get_text())
            Primary_Camera = Details_Data[k].get_text()
         if Details_Data_Type[k].get_text() == 'Battery Capacity':
            # print(Details_Data[k].get_text())
            Battery_Capacity = Details_Data[k].get_text().replace('mAh', '').strip()
         if Details_Data_Type[k].get_text() == 'Warranty Summary':
            # print(Details_Data[k].get_text())
            Warranty_Summary = Details_Data[k].get_text()
         k=k+1
            
      cursor = conn.cursor()
      for i in range(3):
         try:
            cursor.execute("""Insert Into mobiles_product_details 
                           (company_name, price, photo, ram, internal_storage, expandable, display, camera, battery, processor, 
                           link, warranty, star, rating_review, in_the_box, product_type_id) values
                           ('"""+str(name)+"""',
                           """ + Price.get_text().replace("₹",'').replace(",",'').strip()+""",
                           '"""+image_name+"""', 
                           """+RAM+""", 
                           """+Internal_Storage+""", 
                           """+expandable_storage+""", 
                           '"""+Display_Size+"""', 
                           '"""+Primary_Camera+"""', 
                           """+Battery_Capacity+""",  
                           '"""+Processor_Type+Processor_Core+"""',  
                           '"""+s.tinyurl.short(lnk)+"""',
                           '"""+Warranty_Summary+"""',
                           """+Star.get_text()+""", 
                           '"""+Rating.get_text()+"""',
                           '"""+In_The_Box+"""',
                           1) ON CONFLICT (company_name) DO NOTHING""")

         except Exception as e:
            conn.rollback()
         else:
            conn.commit()
  
      cursor.close()
      
   p=p+1

conn.close()

