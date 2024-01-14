
import styles from './Avatar.module.css'
import { ImgHTMLAttributes} from 'react';

/* desestruturação

    const user = { name : "Diego"}
    -> const { name } = user;

*/

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}: AvatarProps) {

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}