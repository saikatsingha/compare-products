const MobileDetail = (props) => {
    const [mobile, setMobile] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/mobiles/1`);
                setMobile(res.data);
                {console.log(res)}
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    return (
        <div classNameName='container mt-3'>
            {console.log(mobile)}
            <h1 classNameName='display-2'>{mobile.title}</h1>
            <h4>{mobile.month} {mobile.day}</h4>
            <hr />
            <p classNameName='lead mb-5'><Link to='/mobile' classNameName='font-weight-bold'>Back to mobiles</Link></p>
        </div>
        <>
        <nav>
        <Link to='/mobile'>Mobiles</Link>
        </nav>
        
        </>
    );
    {console.log('mobile')}
};
