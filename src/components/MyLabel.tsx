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
     * All letter capitalized
     */
    allCaps?: boolean;

    /**
     * color
     */
    color?: 'primary' | 'secondary' | 'tertiary';

    /**
     * Font color
     */
    fontColor?: string;


    /**
     * Background color
     */
    backgroundColor: string;

}

export const MyLabel = ({ label, size = 'normal', color = 'primary', allCaps = false, fontColor = '#aaaaaa', backgroundColor = 'transparent' }: Props) => {


    return (
        <span 
            className={`${size} text-${color}`} 
            style={{ 
                textTransform: `${allCaps == true ? 'uppercase' : 'none'}`,
                color: fontColor,
                backgroundColor: backgroundColor
            }}>
            {label}
        </span>
    )
    
}
