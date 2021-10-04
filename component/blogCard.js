
import Link from 'next/link'
import blogStyle from '../styles/blogCard.module.css'
import Image from 'next/image'


export default function BlogCard({blog}) {
    const { title, slug, thumbnail } = blog.fields
    return(
        <>
          <div className={blogStyle.BlogCard_container} >
            <div className={blogStyle.card}>
                <div> 
                    {title}
                </div>
                <div className={blogStyle.featured}>
                    <Image className={blogStyle.img}
                    // src={'https:' + thumbnail.fields.file.url}
                    // width = {thumbnail.fields.file.details.image.width}
                    // height = {thumbnail.fields.file.details.image.height}>
                    src={'https:' + thumbnail.fields.file.url}
                    width = '250px'
                    height = '250px'>
                    </Image>
                </div>
                <div className = {blogStyle.LinkStyle}> 
                    <a href = {'/blog/' + slug } 
                    className = {blogStyle.aStyle} id ='aStyle'>
                        READ More
                    </a>
                </div>
            </div>
            <hr className = {blogStyle.hr} ></hr>
          </div>
        </>
    )
  }