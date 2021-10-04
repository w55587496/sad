import bannerStyles from '../styles/banner.module.css'
import Link from 'next/link';
import Image from 'next/image';



export default function HeroBanner(data) {

    const bannerTtile = "Hi, FRIENDS! I AM XXX."
    const bannerDetail = " I usually stream MapleStory or what I am interested(maybe Coding or Chatting)."

    return(
        <>
            <div className = {bannerStyles.container}>
                <div className = {bannerStyles.cardBlock}>
                    <div className = {bannerStyles.cardIntro}>
                        <h1>
                            {bannerTtile}
                        </h1>
                    </div>
                    <hr className = {bannerStyles.hr}></hr>
                    <div>
                      <h2>
                          {bannerDetail}
                      </h2>
                    </div>
                </div>
            </div>
        </>
    )

}