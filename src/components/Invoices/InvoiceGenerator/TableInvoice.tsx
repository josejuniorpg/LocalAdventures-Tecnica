'use client';

import React, { useState } from 'react';
import { IconX } from '@tabler/icons-react';
import { ActionIcon, Box, Button, Table } from '@mantine/core';
import { NumberInputInvoice } from '@/src/components/Invoices/InvoiceGenerator/NumberInputInvoice';
import { TextInputInvoice } from '@/src/components/Invoices/InvoiceGenerator/TextInputInvoice';
import classes from './InvoiceGenerator.module.css';

interface Row {
  id: number;
  description: string;
  quantity: number;
  price: number;
}

export function TableInvoice() {
  const [numberRow, setNumberRow] = useState('00');
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);
  const [rows, setRows] = useState<Row[]>([]);

  const handleAddClick = () => {
    const newRow: Row = {
      id: Number(numberRow),
      description: '',
      quantity: 1,
      price: 0.0,
    };

    setRows((prevRows) => {
      return [...prevRows, newRow];
    });

    addNumberRow(); // Increment number for the next row.
  };
  const addNumberRow = () => {
    setNumberRow((prevNumberRow) => {
      const newNumber = (parseInt(prevNumberRow, 10) + 1).toString().padStart(2, '0');
      return newNumber;
    });
  };

  const handleDeleteClick = () => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows]; // Crear una copia del array actual
      updatedRows.pop(); // Eliminar la última fila
      return updatedRows; // Devolver el nuevo array
    });
  };

  const renderRows = rows.map((row, index) => (
    <Table.Tr
      key={index}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
      }}
      onMouseEnter={() => setHoveredRowIndex(index)} // Manage hover on row
      onMouseLeave={() => setHoveredRowIndex(null)} // Clean hover.
    >
      <Table.Td style={{ flex: 1 }}>
        <TextInputInvoice placeholder={index < 10 ? `0${index}` : `${index}`} w="100%" />
      </Table.Td>
      <Table.Td style={{ flex: 2 }}>
        <TextInputInvoice placeholder={'Item Description'} w="100%" />
      </Table.Td>
      <Table.Td style={{ flex: 1 }}>
        <NumberInputInvoice placeholder="1" width="100%" />
      </Table.Td>
      <Table.Td mr={20} style={{ flex: 1 }}>
        <NumberInputInvoice placeholder="$0.00" width="100%" />
      </Table.Td>

      <Box
        style={{
          position: 'absolute',
          right: 0,
          height: '100%',
          maxWidth: hoveredRowIndex === index ? '100px' : '0',
          overflow: 'hidden',
          transition: 'max-width 0.9s ease',
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            transition: 'opacity 0.6s ease',
            opacity: hoveredRowIndex === index ? 1 : 0,
            marginRight: '7px',
          }}
        >
          <ActionIcon
            onClick={() => handleDeleteClick()}
            variant="filled"
            color="red"
            size="sm"
            radius="xl"
            aria-label="Settings"
          >
            <IconX />
          </ActionIcon>
        </Box>
      </Box>
    </Table.Tr>
  ));

  return (
    <Box pt="3rem" pb="3rem" className={classes.invoiceTableWrapper}>
      <Table
        striped
        stripedColor="deepBlue.0"
        borderColor="deepBlue.9"
        withRowBorders
        verticalSpacing="15"
        className={classes.invoiceTable}
      >
        <Table.Thead>
          <Table.Tr
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '60px',
            }}
          >
            <Table.Th style={{ flex: 1 }}>ID</Table.Th>
            <Table.Th style={{ flex: 3 }}>Description</Table.Th>
            <Table.Th style={{ flex: 1 }}>Quantity</Table.Th>
            <Table.Th style={{ flex: 1 }}>Price</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{renderRows}</Table.Tbody>
      </Table>

      <Box className={classes.addMoreButtonWrapper}>
        <Button fw={700} onClick={handleAddClick} className={classes.addMoreHiddenButton}>
          + Add More
        </Button>
      </Box>
    </Box>
  );
}
