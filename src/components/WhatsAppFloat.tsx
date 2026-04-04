import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5587991516025?text=Ol%C3%A1%2C%20vi%20a%20proposta%20do%20app%20de%20delivery%20do%20Avist%C3%A3o%20e%20quero%20entender%20melhor%20como%20funcionaria."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-2xl shadow-whatsapp/30 hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-whatsapp/20"
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppFloat;
