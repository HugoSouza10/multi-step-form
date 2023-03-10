import {Link} from 'react-router-dom';
import * as C from './style';

import {ReactComponent as ProfileIcon} from '../svgs/profile.svg';
import {ReactComponent as BookIcon} from '../svgs/book.svg';
import {ReactComponent as MailIcon} from '../svgs/mail.svg';


type Props = {
    title: string,
    description: string,
    icon: string,
    patch: string
    pointMarked: boolean
   
}

export const Sidebaritem = ({title,description, icon, patch, pointMarked}: Props) => {

    console.log(pointMarked)
    return (
       <C.Container>
           <Link to={patch}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>

                <C.IconArea>

                    {icon == 'profile' &&
                         <ProfileIcon fill='white' width={24} height={24}/>
                    }


                    {icon == 'book' &&
                         <BookIcon fill='white' width={24} height={24}/>
                    }

                    {icon == 'mail' &&
                         <MailIcon fill='white' width={24} height={24}/>
                    }
                    
                   
                </C.IconArea>

                <C.Point pointMarked = {pointMarked}></C.Point>
           </Link>
       </C.Container>
    )
}