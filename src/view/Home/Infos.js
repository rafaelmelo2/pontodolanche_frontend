
import './css/Infos.css'

function Infos(){
    return(
        <div className="infos">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422.15785170505245!2d-47.95813916775239!3d-18.170883247814757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a667a9295510e9%3A0xc0b7f2e2d45a757f!2sPitik%C3%A3o%20do%20Urbano!5e0!3m2!1spt-BR!2sbr!4v1709765986609!5m2!1spt-BR!2sbr" 
                style={{ border: 0 }} 
                allowfullscreen="" 
                loading="eager" 
                referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
            <br />
            
        </div>
    )
}

export default Infos