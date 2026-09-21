const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function fixFile(file, replacer) {
    const fullPath = path.join(__dirname, file);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');
    let original = content;
    content = replacer(content);
    if (content !== original) {
        fs.writeFileSync(fullPath, content);
    }
}

// 1. about/page.tsx, contact/page.tsx, page.tsx, products/[id]/page.tsx
const pages = [
    'src/app/about/page.tsx', 
    'src/app/contact/page.tsx', 
    'src/app/not-found.tsx',
    'src/app/page.tsx', 
    'src/app/products/[id]/page.tsx',
];

pages.forEach(file => fixFile(file, (c) => {
    c = c.replace(/\s*onClick=\{\(\) => setIsCustomFitModalOpen\(true\)\}/g, '');
    c = c.replace(/\s*onOpenCustomFitModal=\{\(\) => setIsCustomFitModalOpen\(true\)\}/g, '');
    c = c.replace(/onOpenCustomFitModal=\{\(\) => setIsCustomFitModalOpen\(true\)\}/g, '');
    c = c.replace(/,\s*onOpenCustomFitModal: \(\) => setIsCustomFitModalOpen\(true\)/g, '');
    c = c.replace(/onOpenCustomFitModal: \(\) => setIsCustomFitModalOpen\(true\),?/g, '');
    c = c.replace(/onOpenCustomFitModal=\{\(\) => \{\}\}/g, ''); // not-found.tsx might have this
    return c;
}));

// Components with missing props destructured or interfaces
const components = [
    'src/components/CartDrawer.tsx',
    'src/components/EditorialSection.tsx',
    'src/components/Footer.tsx',
    'src/components/Hero.tsx',
    'src/components/Navbar.tsx',
    'src/components/QuickViewModal.tsx',
];

components.forEach(file => fixFile(file, (c) => {
    // any leftover onOpenCustomFitModal calls
    c = c.replace(/\s*onOpenCustomFitModal\(\);/g, '');
    c = c.replace(/\s*onClick=\{onOpenCustomFitModal\}/g, '');
    c = c.replace(/onOpenCustomFitModal\(\);/g, '');
    
    // interfaces
    c = c.replace(/\s*onOpenCustomFitModal\?:?\s*\(\)\s*=>\s*void;/g, '');
    
    // params
    c = c.replace(/\{\s*onOpenCustomFitModal\s*\}/g, '{}');
    c = c.replace(/\{\s*onOpenCustomFitModal,\s*/g, '{ ');
    c = c.replace(/,\s*onOpenCustomFitModal\s*\}/g, ' }');
    
    return c;
}));
