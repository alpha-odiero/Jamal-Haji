import DesignImage from '../ui/DesignImage'

interface ProjectGalleryProps {
  images: (string | null)[]
  title: string
  className?: string
}

export default function ProjectGallery({ images, title, className = '' }: ProjectGalleryProps) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${className}`}>
      {images.map((image, index) => (
        <DesignImage
          key={index}
          src={image}
          alt={`${title} — visual ${index + 1}`}
          aspect={index === 0 ? 'aspect-[16/10] sm:col-span-2' : 'aspect-[4/3]'}
          label={title}
          gradientFrom={index % 2 === 0 ? 'var(--placeholder-1)' : 'var(--placeholder-3)'}
          gradientTo={index % 2 === 0 ? 'var(--placeholder-3)' : 'var(--placeholder-4)'}
        />
      ))}
    </div>
  )
}
