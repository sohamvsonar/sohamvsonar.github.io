# Adding Your Profile Image

To add your profile image to the hero section:

1. **Add your image to this folder:**
   - Save your profile image as `profile.jpg` (or `.png`, `.webp`)
   - Recommended size: 500x500px or larger (square aspect ratio)
   - Optimize for web (compress to ~100-200KB)

2. **Update the hero component:**
   - Open `src/components/hero.tsx`
   - Find the commented Image component (around line 164)
   - Uncomment it and update the path:
   ```tsx
   <Image
     src="/images/profile.jpg"  // Update with your image filename
     alt="Soham Sonar"
     fill
     className="object-cover"
     priority
   />
   ```
   - Remove or comment out the placeholder div above it

3. **Test your changes:**
   ```bash
   npm run dev
   ```

The image will appear in a circular frame with beautiful animations and decorative elements!