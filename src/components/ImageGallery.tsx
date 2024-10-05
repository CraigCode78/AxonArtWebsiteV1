import React, { useState } from 'react'

interface Image {
  id: number;
  src: string;
  alt: string;
}

const images: Image[] = [
  { id: 1, src: "https://healthartv2-craighepburn.replit.app/get_image/health_art_c2994a86-ca96-4cb4-b719-0c77d12974df.png", alt: "Health Art Visualization 1" },
  { id: 2, src: "https://healthartv2-craighepburn.replit.app/get_image/health_art_c5e20968-a798-4593-9e01-c873b55b90a6.png", alt: "Health Art Visualization 2" },
  { id: 3, src: "https://healthartv2-craighepburn.replit.app/get_image/health_art_f907fd8b-b100-4f78-8bf3-08cd489fbae5.png", alt: "Health Art Visualization 3" },
  { id: 4, src: "https://healthartv2-craighepburn.replit.app/get_image/health_art_d9a548bb-d320-48fe-9768-4c6c8bc17152.png", alt: "Health Art Visualization 4" },
  { id: 5, src: "https://healthartv2-craighepburn.replit.app/get_image/health_art_fb4113d0-9eef-4a2e-8ae6-9acdb53867cb.png", alt: "Health Art Visualization 5" },
  { id: 6, src: "https://healthartv2-craighepburn.replit.app/get_image/health_art_5126a2aa-0518-4783-855b-ffbe6ec7d506.png", alt: "Health Art Visualization 6" },
  { id: 7, src: "https://healthartv2-craighepburn.replit.app/get_image/health_art_00aff367-5c29-44c8-8574-699b75b77cc9.png", alt: "Health Art Visualization 7" },
  { id: 8, src: "https://healthartv2-craighepburn.replit.app/get_image/health_art_1631d025-8d00-4c4c-8ec0-c92334ad77f0.png", alt: "Health Art Visualization 8" },
  { id: 9, src: "https://healthartv2-craighepburn.replit.app/get_image/health_art_a7dc2cc8-2ca4-418c-ad79-097e80d605dc.png", alt: "Health Art Visualization 9" },
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">AI-Generated Health Art Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="max-w-3xl max-h-full p-4">
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery