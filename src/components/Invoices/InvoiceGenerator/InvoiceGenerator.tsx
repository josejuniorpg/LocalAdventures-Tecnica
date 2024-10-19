'use client';

import { useRef, useState } from 'react';
import { TextInputInvoice } from 'components/Invoices/InvoiceGenerator/TextInputInvoice';
import { Button, Card, Group, Image, Stack, Text, Title } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import classes from './InvoiceGenerator.module.css';

export function InvoiceGenerator() {
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
    <Card padding="24" withBorder className={classes.invoiceCard}>
      <Stack gap={0}>
        <Group justify="space-between">
          <Stack gap={0}>
            <Title mt={'16'} mb={'16'}>
              Invoice
            </Title>
            <Stack pb={'20'}>
              <TextInputInvoice placeholder={'Your Company*'} isBold={true} size={'26'} />
              <Group>
                <TextInputInvoice placeholder={'First Name*'} />
                <TextInputInvoice placeholder={'Last Name*'} />
              </Group>
              <TextInputInvoice placeholder={'Company Website*'} />
              <TextInputInvoice placeholder={'Company Address'} />
              <TextInputInvoice placeholder={'City, State ZIP'} />
              <TextInputInvoice placeholder={'Country'} />
              <TextInputInvoice placeholder={'Phone No*'} />
              <TextInputInvoice placeholder={'Email Address*'} />
            </Stack>

            <Stack pb={'20'}>
              <TextInputInvoice placeholder={'Clients Company*'} isBold={true} size={'26'} />
              <Group>
                <TextInputInvoice placeholder={'First Name*'} />
                <TextInputInvoice placeholder={'Last Name*'} />
              </Group>
              <TextInputInvoice placeholder={'Clients Address'} />
              <TextInputInvoice placeholder={'City, State ZIP'} />
              <TextInputInvoice placeholder={'Country'} />
              <TextInputInvoice placeholder={'Clients Email*'} />
            </Stack>
          </Stack>

          <Stack justify="space-between">
            {/* todo: Add the image selector*/}
            <>
              <Dropzone
                accept={IMAGE_MIME_TYPE}
                onDrop={handleDrop}
                openRef={openRef}
                style={{
                  position: 'relative',
                  width: '208px',
                  height: '117px',
                  border: file ? 'none' : '2px dashed #ccc', // Delete border if there is file.
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
                      onLoad={() => URL.revokeObjectURL(imageUrl)} // Revocar la URL después de cargar
                      alt={`Preview of ${file.name}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ) : (
                  <Text
                    align="center"
                    style={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Drop an image here or click to select
                  </Text>
                )}
              </Dropzone>
            </>
            <Stack>
              <Group>
                <Text>dssasadsad</Text>
                <Text>dssasadsad</Text>
              </Group>
              <Group>
                <Text>dssasadsad</Text>
                <Text>dssasadsad</Text>
              </Group>
              <Group>
                <Text>dssasadsad</Text>
                <Text>dssasadsad</Text>
              </Group>
            </Stack>
          </Stack>
        </Group>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
        </Group>

        <Button color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Stack>
    </Card>
  );
}
