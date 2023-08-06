function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let text = htmlContent;
    let difference = 0;
   for (const position of plainTextPositions) {
      const { start, end } = position;
      const highlightedText = plainText.substring(start, end + 1);
      const startIndex = start + difference;
      const endIndex = end + difference;
      const openingTag = text.indexOf(highlightedText, startIndex);
      const closingTag = openingTag + highlightedText.length;
      text = text.slice(0, openingTag) + `<mark>${highlightedText}</mark>` + text.slice(closingTag);
      difference += 13; 
    }
     return text;
  }
  