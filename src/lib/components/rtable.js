
function RTable(props){
    
    return(
        <>
            <table className={props.className}>
                <thead>
                    <tr>
                        { props.TableHeadings.map((item,i) => (

                            <th key={i}>{item.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        props.TableData.map((data,i) => (
                            <tr>
                                {
                                    Object.keys(data).map((keyname,i)=>(
                                        <th>{data[keyname]}</th>
                                    ))
                                }
                                
                            </tr>
                        ))
                    }
                </tbody>            
            </table> 
        </>   
    );
}

export default RTable;