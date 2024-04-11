import logo from './imagens/images.png';
import Menu from './TextMenu';
import { PiHouseFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaRegPlusSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />

            <div className='lateralEsquerdaIcons'>
                <ul>
                    <Menu
                      icone={<PiHouseFill
                        classes="homeIco"
                        style={{
                            color:'black',
                            alignSelf:'center',
                            paddingRight:'10%',
                        }}
                        />} nome="home" />
                    <Menu
                        icone={<IoSearchOutline
                        classes="homeIco"
                        style={{
                            color:'black',
                            alignSelf:'center',
                            paddingRight:'10%',
                        }}
                        />} nome="Explore" />
                    <Menu
                      icone={<IoChatbubbleEllipsesOutline
                        classes="homeIco"
                        style={{
                            color:'black',
                            alignSelf:'center',
                            paddingRight:'10%',
                        }}
                        />} nome="Menssages" />
                    <Menu
                      icone={<FiHeart
                        classes="homeIco"
                        style={{
                            color:'black',
                            alignSelf:'center',
                            paddingRight:'10%',
                        }}
                        />} nome="Notifications" />
                    <Menu
                      icone={<FaRegPlusSquare
                        classes="homeIco"
                        style={{
                            color:'black',
                            alignSelf:'center',
                            paddingRight:'10%',
                        }}
                        />} nome="Create" />
                        <Menu
                          icone={<CgProfile
                            classes="homeIco"
                            style={{
                                color:'black',
                                alignSelf:'center',
                                paddingRight:'10%',
                            }}
                            />} nome="Profile" />
                </ul>
            </div>
        </div>
    )
}

// export default ConteudoLateralEsquerda;