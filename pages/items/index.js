import Link from 'next/link';
import styles from '../../styles/Item.module.css'

export const getStaticProps = async() =>{
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return{
        props :{items:data}
    }
}


const Ninjas = ({items}) => {
    return ( 
        <>
        <h1>Items</h1>
        {items.map(item =>(
            <Link href={'/items/'+item.id} key={item.id}>
                <div className={styles.single}>
                    <h3>{item.name}</h3>
                </div>
            </Link>
        ))}
        </>
     );
}
 
export default Ninjas;