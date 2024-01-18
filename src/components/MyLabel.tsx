import './Mylabel.css'

interface Props {

    /**
     * Text to display
     */
    label: string;

    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * 
     */
    allCaps?: boolean;

    /**
     * 
     */
    color?: 'primary' | 'secondary' | 'tertiary';

    /**
     * 
     */
    fontColor?: string;

}

export const MyLabel = ({ label, size = 'normal', color = 'primary', allCaps = false, fontColor = '#aaaaaa' }: Props) => {


    return (
        <span 
            className={`${size} text-${color}`} 
            style={{ 
                textTransform: `${allCaps == true ? 'uppercase' : 'none'}`,
                color: fontColor
            }}>
            {label}
        </span>
    )
    
}
