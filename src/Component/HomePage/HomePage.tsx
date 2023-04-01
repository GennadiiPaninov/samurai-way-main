import React, {FC, useState} from "react";
import style from './HomePage.module.css';
import MyPosts, {PropsPostsDataItemType} from "./Posts/MyPosts";

const HomePage: FC = () => {
    let [postDataItem, setPostDataItem] = useState<Array<PropsPostsDataItemType>>([
        {
            id: 1,
            imageRef: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHGqqNwyBJomr8lGscDtt0tf7fIozm_vsfw&usqp=CAU",
            postText: "post1",
            postDate: "12.05.2023, time: 18.50"
        },
        {
            id: 2,
            imageRef: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHGqqNwyBJomr8lGscDtt0tf7fIozm_vsfw&usqp=CAU",
            postText: "post2",
            postDate: "12.05.2023, time: 18.55"
        },
        {
            id: 3,
            imageRef: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHGqqNwyBJomr8lGscDtt0tf7fIozm_vsfw&usqp=CAU",
            postText: "post3",
            postDate: "12.05.2023, time: 18.57"
        },
    ])
    return (
        <>
            <img className={style.avatar}
                 src={"https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true&fud_access=wJJIheezUklbAN2ppeDns8cDNpYs3nCYjgitr%2BfFBh2dqlqMuW7np3F6Utp%2FKMltnRRYFtVjOMO5tpbpW9UyRAwvLeec5emAPixgq9ta07Dgnp2aq5eJbnfd%2FU3qhn5498QChOTHl3NpYS7xR7zASsaF20jo4ICSz2XTm%2B3GDR4XitSm7nHRR843ku7uXQ4oF6innoBxMaSe9UfrAdMi7owFKjdP9m1UP2W5KAtfQLPR3pZNj4kDC5EkwyHNFCJ5uM7DBEcWrt2Cin0I7D%2Foor4G00bVb6NsuwIQX4A0CdxVJMXULuL8mHViERzVYWJ7Co70Cv5M%2B7XzFbED97Rr066cT3vPab0ygA%2B6JUBEs8wR3FAUI5TM7%2BUru%2F5Ca%2Bd4q2g7%2FqerRZ5OWOrJQtRzuBqiB3atMl3hUky%2BxVtwvZM%3D"}/>

            <section className={style.infAbUser}>

                <h3> Лобоцкий Геннадий Александрович</h3>
                <br/>
                <div className={style.otherInf}>
                    <p>Date of Birth: 29 December</p>
                    <p>City: Minsk</p>
                    <p>Education: Yep</p>
                </div>
            </section>
            <div className={style.myPostconteiner}>
                <p className={style.myPostName}>My posts</p>
                <MyPosts postDataItem={postDataItem}/>

            </div>
        </>
    )
}

export default HomePage;
