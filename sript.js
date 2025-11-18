const defaultConfig = {
  school_name: "Gurukul Vidyapeeth",
  school_motto: "Excellence in Education",
  contact_email: "gurukulvidyapeethhaj@yahoo.in",
  contact_phone: "+919931602179,+917673076349,+918002043766",
  school_address: "Rampur Nausahan, Nawada Chowk, Near Jadhua, Hajipur (Vaishali), Bihar, India",
  primary_color: "#667eea",
  secondary_color: "#764ba2",
  surface_color: "#ffffff",
  text_color: "#333333",
  accent_color: "#2d3748",
  font_family: "Segoe UI",
  font_size: 16
};

async function onConfigChange(config) {
  const primaryColor = config.primary_color || defaultConfig.primary_color;
  const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const accentColor = config.accent_color || defaultConfig.accent_color;
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;

  document.getElementById('school-name').textContent = config.school_name || defaultConfig.school_name;
  document.getElementById('school-motto').textContent = config.school_motto || defaultConfig.school_motto;
  document.getElementById('contact-email').textContent = config.contact_email || defaultConfig.contact_email;
  document.getElementById('contact-phone').textContent = config.contact_phone || defaultConfig.contact_phone;
  document.getElementById('contact-address').textContent = config.contact_address || defaultConfig.contact_address;

  const hero = document.querySelector('.hero');
  hero.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.style.color = primaryColor;
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.background = surfaceColor;
  });

  const aboutContents = document.querySelectorAll('.about-content');
  aboutContents.forEach(content => {
    content.style.background = surfaceColor;
    content.style.color = textColor;
  });

  const contactInfo = document.querySelector('.contact-info');
  contactInfo.style.background = surfaceColor;

  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.style.color = textColor;
  });

  const subsectionTitles = document.querySelectorAll('.subsection-title');
  subsectionTitles.forEach(title => {
    title.style.color = primaryColor;
  });

  const footer = document.querySelector('footer');
  footer.style.background = accentColor;

  const contactIcons = document.querySelectorAll('.contact-icon');
  contactIcons.forEach(icon => {
    icon.style.color = primaryColor;
  });

  const programCards = document.querySelectorAll('.program-card');
  programCards.forEach(card => {
    card.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
  });

  document.body.style.fontFamily = `${customFont}, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;

  document.querySelector('.hero h1').style.fontSize = `${baseSize * 3}px`;
  document.querySelector('.hero p').style.fontSize = `${baseSize * 1.25}px`;
  document.querySelectorAll('.nav-link').forEach(el => el.style.fontSize = `${baseSize * 0.875}px`);
  document.querySelectorAll('.section-title').forEach(el => el.style.fontSize = `${baseSize * 2.25}px`);
  document.querySelectorAll('.about-content').forEach(el => el.style.fontSize = `${baseSize * 1.125}px`);
  document.querySelectorAll('.card-title').forEach(el => el.style.fontSize = `${baseSize * 1.375}px`);
  document.querySelectorAll('.card-text').forEach(el => el.style.fontSize = `${baseSize}px`);
  document.querySelectorAll('.contact-item').forEach(el => el.style.fontSize = `${baseSize * 1.125}px`);
  document.querySelector('footer p').style.fontSize = `${baseSize}px`;
  document.querySelectorAll('.subsection-title').forEach(el => el.style.fontSize = `${baseSize * 1.5}px`);
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.primary_color || defaultConfig.primary_color,
        set: (value) => {
          config.primary_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({
              primary_color: value
            });
          }
        }
      },
      {
        get: () => config.secondary_color || defaultConfig.secondary_color,
        set: (value) => {
          config.secondary_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({
              secondary_color: value
            });
          }
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({
              surface_color: value
            });
          }
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({
              text_color: value
            });
          }
        }
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => {
          config.accent_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({
              accent_color: value
            });
          }
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        if (window.elementSdk) {
          window.elementSdk.setConfig({
            font_family: value
          });
        }
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        if (window.elementSdk) {
          window.elementSdk.setConfig({
            font_size: value
          });
        }
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["school_name", config.school_name || defaultConfig.school_name],
    ["school_motto", config.school_motto || defaultConfig.school_motto],
    ["contact_email", config.contact_email || defaultConfig.contact_email],
    ["contact_phone", config.contact_phone || defaultConfig.contact_phone],
    ["contact_address", config.contact_address || defaultConfig.contact_address]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}