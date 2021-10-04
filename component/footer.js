import FooterStyles from '../styles/footer.module.css'
import Link from 'next/link';
import Image from 'next/image';


export default function HeroFooter() {

    return(
        <>
            <footer className = {FooterStyles.container}>
                <div className = {FooterStyles.copyRight}>
                    <p className = {FooterStyles.p}>
                        ©yunlostinemotion. 2021 All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}