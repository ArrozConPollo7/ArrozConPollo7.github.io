import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    // EDITA ESTE NÚMERO CON TU NÚMERO DE WHATSAPP
    // Formato: código de país + número (sin espacios, guiones ni paréntesis)
    // Ejemplo: '573001234567' para Colombia
    const phoneNumber = '1234567890'; // ⬅️ CAMBIA ESTE NÚMERO

    // EDITA ESTE MENSAJE PREDETERMINADO (opcional)
    const defaultMessage = '¡Hola! Me interesa obtener más información.';

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            className="whatsapp-float-button"
            onClick={handleClick}
            aria-label="Contactar por WhatsApp"
        >
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="whatsapp-icon"
            >
                <path
                    fill="currentColor"
                    d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.48 2.028 7.784L0 32l8.384-2.196A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.44 0-4.73-.66-6.696-1.81l-.48-.285-4.97 1.302 1.325-4.844-.313-.497A13.266 13.266 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.308-9.977c-.4-.2-2.37-1.17-2.737-1.303-.368-.133-.636-.2-.903.2-.268.4-1.037 1.303-1.27 1.57-.235.268-.47.302-.87.1-.4-.2-1.688-.622-3.215-1.984-1.188-1.06-1.99-2.368-2.223-2.768-.234-.4-.025-.616.175-.815.18-.18.4-.47.6-.703.2-.234.267-.4.4-.668.133-.267.067-.5-.033-.7-.1-.2-.903-2.177-1.237-2.98-.325-.782-.655-.676-.903-.69-.234-.012-.5-.015-.77-.015s-.702.1-1.07.5c-.367.4-1.402 1.37-1.402 3.343s1.436 3.878 1.636 4.145c.2.268 2.825 4.314 6.845 6.05.956.413 1.703.66 2.285.845.96.305 1.834.262 2.525.16.77-.115 2.37-.97 2.704-1.905.334-.936.334-1.738.234-1.905-.1-.168-.368-.268-.77-.47z"
                />
            </svg>
        </button>
    );
};

export default WhatsAppButton;
