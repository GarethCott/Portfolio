import Image from 'next/image'
import styles from "./page.module.css";
import React from 'react'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Consectetur a erat nam at lectus urna duis convallis.</h1>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Cotti</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Aliquet risus feugiat in ante. Eget dolor morbi non arcu risus quis. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Amet justo donec enim diam. Malesuada fames ac turpis egestas. Faucibus ornare suspendisse sed nisi lacus. Eu sem integer vitae justo eget magna fermentum iaculis eu. Morbi enim nunc faucibus a pellentesque. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Tellus integer feugiat scelerisque varius morbi enim nunc.
        </p>
      </div>
    </div>
  )
}

export default BlogPost