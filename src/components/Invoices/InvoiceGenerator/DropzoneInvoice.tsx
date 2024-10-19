import { useRef, useState } from 'react';
import { Image, Text } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function DropZoneInvoice() {
  const [file, setFile] = useState<FileWithPath | null>(null);
  const openRef = useRef<() => void>(null); // This is necessary for open dropZone.

  const handleDrop = (acceptedFiles: FileWithPath[]) => {
    setFile(acceptedFiles[0]); // Accepts only the first file.
  };

  const handleRemove = () => {
    setFile(null); //todo: create a delete buton.
  };

  const imageUrl = file ? URL.createObjectURL(file) : '';
  return (
    <Dropzone
      accept={IMAGE_MIME_TYPE}
      onDrop={handleDrop}
      openRef={openRef}
      pl={56}
      pr={56}
      pt={0}
      style={{
        position: 'relative',
        width: '230px',
        height: '130px',
        backgroundColor: 'white', //This help to prevent the hover background.
        border: file ? 'none' : '2px dashed #ff7a59', // Delete border if there is a file.
        transition: 'transform 0.4s ease', // Animation when hover.
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(0.90)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {file ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Image
            src={imageUrl}
            onLoad={() => URL.revokeObjectURL(imageUrl)}
            alt={`Preview of ${file.name}`}
            width="100%"
            height="100%"
            fit="cover"
          />
        </div>
      ) : (
        <Text ta="center" size="lg" fw={600}>
          Drag & drop a logo file or click to upload
        </Text>
      )}
    </Dropzone>
  );
}
