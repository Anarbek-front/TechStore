import './buttonReusable.css'

const bgcVariantSwitchFunc = (variant) => {
    switch (variant) {
        case 'light':
            return '#f8f9fa'
        case 'dark':
            return '#212529'
        case 'primary':
            return '#0d6efd'
        case 'secondary':
            return '#6c757d'
        case 'success':
            return '#198754'
        case 'info':
            return '#0dcaf0'
        case 'warning':
            return '#ffc107'
        case 'danger':
            return '#dc3545'
    }
}

const colorBtnSwitch = (variant) => (variant === 'light' ? '#212529' : '#fff')

export const ButtonReusable = ({
    type,
    variant,
    onClick,
    children,
    className,
    icon,
    id,
}) => {
    const btnBgcVariant = bgcVariantSwitchFunc(variant)
    const btnColorVariant = colorBtnSwitch(variant)

    return (
        <button
            id={id}
            onClick={onClick}
            type={type ? type : 'button'}
            className={`reusable_btn ${className}`}
            style={{
                backgroundColor: btnBgcVariant,
                color: btnColorVariant,
            }}
        >
            {icon}
            {children}
        </button>
    )
}
