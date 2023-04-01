import React, {FC} from "react";
import style from './MyPosts.module.css';

export type PropsPostsDataItemType = {
    imageRef: string
    postText: string
    postDate: string
    id: number

}

type PropsType = {
    postDataItem: Array<PropsPostsDataItemType>
}
const MyPosts: FC<PropsType> = (props) => {
    return (<>
            {
                props.postDataItem.map(el =>
                    <div className={style.wrapperPosts} key={el.id}>
                        <img className={style.imgAvat}
                             src={el.imageRef}
                        />
                        <p>{el.postText}</p>
                        <span>{el.postDate}</span>
                    </div>
                )
            }

        </>
    )
}
export default MyPosts