import React from 'react';
import { Page, Text, View, Document, StyleSheet, ReactPDF } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
function PdfCreate ({data}) {
  return(
    <div>{console.log(data)}</div>
  )
}
//ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
//console.log("PATH: ", `${__dirname}/example.pdf`)

export default PdfCreate;