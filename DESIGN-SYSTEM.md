# Siroco Tours - Design System

Extracted from the original sirocotours.com website for pixel-perfect reproduction.

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#08495D` | Headings, footer bg, main brand color |
| Primary Light | `#056C8C` | Links, lighter teal accents |
| Accent (Gold) | `#C4964A` | Icons, decorative elements |
| Background | `#F8F9FA` | Page background |
| Dark | `#23282D` | Dark section backgrounds |
| Input Border | `#F1F1F1` | Form input borders |
| Button Border | `#999999` | CTA button borders |

## Typography

### Fonts
- **Primary (body):** Poppins (weights: 300, 400, 500, 600, 700, 800)
- **Display (headings):** Playfair Display (400, 400italic, 600, 700)
- **Google Fonts URL:** `https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800|Playfair+Display:400,400italic,600,700`

### Heading Sizes
| Element | Size | Weight | Font |
|---------|------|--------|------|
| H1 | 36px | 700 | Poppins |
| H2 | 30-32px | 500 | Poppins |
| H3 | 23px | 600 | Poppins |
| Body | 16px | 400 | Poppins |
| Hero Title | 36px | 700 | Poppins, uppercase, letter-spacing: 0.35em |

### Text Colors
- Headings: `#08495D`
- Body text: `#08495D`
- Muted text: `#08495D` at 70% opacity
- Links: `#056C8C`
- Section subtitle: `#056C8C`, 14px, uppercase, letter-spacing 0.15em

## Layout

- **Container max-width:** 1300px
- **Header height:** 91px
- **Hero height:** ~550px
- **Logo:** `https://sirocotours.com/wp-content/uploads/2025/01/pacotes-marrocos.png` (250x91px original)

## Navigation
- Transparent header on hero, solid `#08495D` on scroll
- White text, uppercase, 16px, Poppins 400
- Links: HOME, TOURS, TEAM, ACTIVITIES, BLOG, CONTACTS

## Buttons

### CTA Button (semi-transparent, used in hero/parallax sections)
```css
background: rgba(255, 255, 255, 0.7);
border: 1.5px solid #999;
border-radius: 5px;
padding: 16px 37px;
font-size: 15px;
font-weight: 500;
color: #000;
```

### Submit Button (contact form)
```css
background: #fff;
border: 1.5px solid #08495D;
border-radius: 5px;
padding: 16px 37px;
font-size: 15px;
font-weight: 500;
color: #08495D;
width: 100%;
```

## Form Inputs
```css
border: 1.5px solid #F1F1F1;
border-radius: 0;
background: #F8F9FA;
padding: 12px 15px;
font-size: 14px;
color: #08495D;
```

## Tour Cards
- 2-column grid on desktop
- Full-bleed images with gradient overlay at bottom
- White text overlay: title + "FIND OUT MORE" in uppercase
- Aspect ratio: ~4:3

## Step Circles (How does it work)
- 80px diameter
- 2px solid border `#08495D`
- Number inside: 24px, weight 600

## Icon Style
- Line icons (stroke, not fill)
- Color: `#C4964A` (bronze/gold)
- Stroke-width: 1-1.2

## Sections Order (Homepage)
1. Hero (desert/camels, "MOROCCO PRIVATE TOURS")
2. Discover section (3 value props with gold icons)
3. Tour cards grid (2 columns)
4. Personalised tours tagline
5. 4 Features (Original Itinerary, 24h Assistance, etc.)
6. Parallax CTA ("Our tours designed to your taste")
7. How does it work (4 steps with numbered circles)
8. Activities CTA parallax
9. Contact form + phone numbers

## Footer
- Background: `#08495D`
- Logo (white/inverted)
- Phone numbers grid by country
- Social icons: Facebook, Instagram, TripAdvisor
- Email + Address
- Legal text
- WhatsApp floating button (green, bottom-right)

## Phone Numbers
| Country | Phone |
|---------|-------|
| Portugal | +351 923 578 090 |
| Brasil | +55 113 163 0572 |
| Marrocos | +212 644 957 982 |
| USA | +1 646 980 3380 |
| China | +86 159 5181 3373 |
