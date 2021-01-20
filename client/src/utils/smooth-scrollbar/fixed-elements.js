const FixedElements = (bodyScrollbar, fixedElement) => {
   bodyScrollbar.addListener(({ offset }) => {  
      fixedElement.style.top = offset.y + 'px';
    });
}

export default FixedElements;