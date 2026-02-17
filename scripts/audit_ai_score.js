
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const pages = [
    "src/app/page.tsx",
    "src/app/services/page.tsx",
    "src/app/services/lead-funnel/page.tsx",
    "src/app/services/ai-chatbot/page.tsx",
    "src/app/services/ai-voice/page.tsx",
    "src/app/services/google-business/page.tsx",
    "src/app/services/review-response/page.tsx",
    "src/app/services/email-automation/page.tsx",
    "src/app/services/social-media/page.tsx",
    "src/app/services/ad-copy/page.tsx",
    "src/app/services/seo-content/page.tsx",
    "src/app/services/landing-pages/page.tsx",
    "src/app/about/page.tsx",
    "src/app/contact/page.tsx",
    "src/app/pricing/page.tsx",
];

function extractText(content) {
    let text = content.replace(/import\s+.*?from\s+['"].*?['"];?/g, " ");
    
    text = text.replace(/export\s+default\s+function\s+\w+/g, " ");
    text = text.replace(/export\s+const\s+\w+\s*=/g, " ");
    
    const strings = [];
    const regex = /["']([^"'\r\n]{10,})["']/g; 
    let match;
    while ((match = regex.exec(content)) !== null) {
        strings.push(match[1]);
    }
    
    const tagTextRegex = />([^<]{10,})</g;
    while ((match = tagTextRegex.exec(content)) !== null) {
        strings.push(match[1]);
    }
    
    return strings.join(" ").replace(/\s+/g, " ").trim();
}

(async () => {
    const texts = {};
    
    for (const relativePath of pages) {
        const fullPath = path.join(__dirname, '../', relativePath);
        if (!fs.existsSync(fullPath)) {
            continue;
        }
        
        const content = fs.readFileSync(fullPath, 'utf8');
        const text = extractText(content);
        if (text.length > 50) {
            console.log(`---START:${relativePath}---`);
            console.log(text);
            console.log(`---END:${relativePath}---`);
        }
    }
})();
