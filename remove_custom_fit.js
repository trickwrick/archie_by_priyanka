const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(srcDir);

files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Remove state declarations
    content = content.replace(/const \[isCustomFitModalOpen,\s*setIsCustomFitModalOpen\]\s*=\s*useState<boolean>\(false\);\n?/g, '');
    content = content.replace(/const \[isCustomFitModalOpen,\s*setIsCustomFitModalOpen\]\s*=\s*useState\(false\);\n?/g, '');
    
    // Remove imports for CustomFittingStudio
    content = content.replace(/import CustomFittingStudio from ["'].*CustomFittingStudio["'];\n?/g, '');
    
    // Remove <CustomFittingStudio ... />
    content = content.replace(/<CustomFittingStudio\s+isOpen=\{isCustomFitModalOpen\}\s+onClose=\{\(\) => setIsCustomFitModalOpen\(false\)\}\s*\/>\n?/g, '');
    
    // Remove onOpenCustomFitModal props being passed
    content = content.replace(/\s*onOpenCustomFitModal=\{\(\) => setIsCustomFitModalOpen\(true\)\}/g, '');
    
    // Remove from interface
    content = content.replace(/\s*onOpenCustomFitModal:\s*\(\)\s*=>\s*void;/g, '');
    
    // Remove from destructured props
    content = content.replace(/,\s*onOpenCustomFitModal/g, '');
    content = content.replace(/onOpenCustomFitModal,\s*/g, '');
    
    // Specifically in Hero.tsx
    if (file.includes('Hero.tsx')) {
        content = content.replace(/export default function Hero\(\{ \}: HeroProps\) \{/g, 'export default function Hero() {');
        content = content.replace(/<button\s*onClick=\{onOpenCustomFitModal\}\s*className="bg-transparent border border-white text-white px-8 py-3\.5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-\[#1E332D\] transition-colors"\s*>\s*Bespoke Fitting\s*<\/button>/g, '');
    }

    // In NewArrivalsCarousel.tsx
    if (file.includes('NewArrivalsCarousel.tsx')) {
        content = content.replace(/<button\s*onClick=\{onOpenCustomFitModal\}\s*className="bg-\[#1E332D\] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-\[#C8A366\] transition-colors w-full max-w-50"\s*>\s*Shop Now\s*<\/button>/g, `<Link href="/products" className="bg-[#1E332D] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#C8A366] transition-colors w-full max-w-50 inline-block text-center">Shop Now</Link>`);
    }

    // In EditorialSection.tsx
    if (file.includes('EditorialSection.tsx')) {
        content = content.replace(/export default function EditorialSection\(\{ \}: EditorialSectionProps\) \{/g, 'export default function EditorialSection() {');
        content = content.replace(/<button\s*onClick=\{onOpenCustomFitModal\}\s*className="bg-transparent border border-white text-white px-8 py-3\.5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-\[#1E332D\] transition-colors mt-6"\s*>\s*Book Bespoke Fitting\s*<\/button>/g, '');
    }

    // In Footer.tsx
    if (file.includes('Footer.tsx')) {
        content = content.replace(/export default function Footer\(\{ \}: FooterProps\) \{/g, 'export default function Footer() {');
        content = content.replace(/\s*<li>\s*<button\s*onClick=\{onOpenCustomFitModal\}\s*className="text-\[#C8A366\] font-bold hover:underline flex items-center gap-1"\s*>\s*<Sparkles className="w-3 h-3" \/>\s*Bespoke Fitting\s*<\/button>\s*<\/li>/g, '');
    }

    // In Navbar.tsx
    if (file.includes('Navbar.tsx')) {
        content = content.replace(/export default function Navbar\(\{ \}: NavbarProps\) \{/g, 'export default function Navbar() {');
        content = content.replace(/\s*<button onClick=\{onOpenCustomFitModal\} className="hover:text-\[#C8A366\] transition-colors">\s*Bespoke Fitting\s*<\/button>/g, '');
        content = content.replace(/\s*<button\s*onClick=\{\(\) => \{\s*setIsMobileMenuOpen\(false\);\s*onOpenCustomFitModal\(\);\s*\}\}\s*className="block text-2xl font-serif text-\[#1E332D\] hover:text-\[#C8A366\] transition-colors text-left"\s*>\s*Bespoke Fitting\s*<\/button>/g, '');
        content = content.replace(/\s*<button\s*onClick=\{\(\) => \{\s*setIsMobileMenuOpen\(false\);\s*onOpenCustomFitModal\(\);\s*\}\}\s*className="flex items-center justify-center gap-2 bg-\[#1E332D\] text-white w-full py-4 text-sm tracking-widest uppercase"\s*>\s*<Sparkles className="w-4 h-4" \/>\s*Book Custom Fitting\s*<\/button>/g, '');
    }
    
    // In QuickViewModal.tsx
    if (file.includes('QuickViewModal.tsx')) {
        content = content.replace(/<button\s*onClick=\{\(\) => \{\s*onClose\(\);\s*onOpenCustomFitModal\(\);\s*\}\}\s*className="flex-1 bg-transparent border border-\[#1E332D\] text-\[#1E332D\] px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-50 transition-colors"\s*>\s*Custom Fit Request\s*<\/button>/g, '');
        content = content.replace(/<button\s*onClick=\{\(\) => \{\s*onClose\(\);\s*onOpenCustomFitModal\(\);\s*\}\}\s*className="w-full mt-4 bg-transparent border border-\[#1E332D\] text-\[#1E332D\] px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-50 transition-colors"\s*>\s*Custom Fit Request\s*<\/button>/g, '');
    }

    // In CartDrawer.tsx
    if (file.includes('CartDrawer.tsx')) {
        content = content.replace(/<button\s*onClick=\{\(\) => \{\s*onClose\(\);\s*onOpenCustomFitModal\(\);\s*\}\}\s*className="flex items-center justify-center gap-2 w-full py-4 bg-transparent border border-\[#1E332D\] text-\[#1E332D\] text-xs font-bold uppercase tracking-widest hover:bg-neutral-50 transition-colors"\s*>\s*<Sparkles className="w-4 h-4" \/>\s*Add Custom Fit\s*<\/button>/g, '');
    }

    if (content !== original) {
        fs.writeFileSync(file, content);
    }
});

console.log("Done");
