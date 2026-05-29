/**
 * Impulsy.ai - Dra. Keyla Harten (Estética Avançada)
 * Configurações da Prévia do Cliente
 */

const siteConfig = {
    brand: {
        name: "Dra. Keyla Harten",
        tagline: "Estética Avançada",
        logoPath: "assets/logo.png",
        subText: "Harmonização Facial & Corporal"
    },
    contact: {
        phone: "5585999942014",
        whatsapp: "https://wa.me/5585999942014?text=Olá! Gostaria de agendar uma consulta inicial com a Dra. Keyla Harten.",
        instagram: "https://www.instagram.com/drakeylaharten",
        email: "keyla.harten@yahoo.com.br",
        address: "Avenida Engenheiro Leal Lima Verde, 10 - Edson Queiroz, Fortaleza - CE, 60834-385",
        googleMaps: "https://g.co/kgs/y15XBWn" // Placeholder Maps link
    },
    theme: {
        palette: {
            primary: "#C5A880", // Dourado Champagne Escovado
            primaryDark: "#B0946E",
            secondary: "#231F1C", // Marrom Café Escuro / Espresso
            bgLight: "#F9F6F0", // Warm Off-white
            bgSand: "#F0EAE1", // Bege Areia
            textMuted: "#6B645E"
        },
        fonts: {
            headline: "'Cormorant Garamond', serif",
            body: "'Plus Jakarta Sans', sans-serif"
        }
    },
    hero: {
        title: "A arte de revelar sua essência com <span class='text-brand-gold italic font-normal'>naturalidade</span> e confiança.",
        description: "Protocolos exclusivos de harmonização facial, botox e emagrecimento corporal sob medida, que respeitam seus traços e revelam sua melhor versão.",
        ctaMain: "Agendar Avaliação",
        ctaSecondary: "Conhecer Especialidades",
        badge: "Dra. Keyla Harten - Estética Avançada"
    },
    sections: {
        philosophy: {
            title: "Beleza que respeita a sua história.",
            subtitle: "Naturalidade em cada detalhe",
            text: "Acreditamos que a verdadeira beleza não reside em mudanças drásticas, mas no equilíbrio sutil e na harmonia dos traços. Nossos tratamentos são desenhados individualmente para entregar segurança clínica e resultados refinados que não alteram quem você é, mas realçam a sua melhor versão."
        }
    }
};

// Exportar para uso no script de hidratação
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
