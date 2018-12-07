import React from 'react';
import { Stage, Layer } from 'react-konva';
import { AppContext } from '../../providers/AppProvider';

const Canvas = () => (  
  <AppContext.Consumer>
    {(context) => {
      const { config } = context;
      console.log(context);
      const { elements } = config;
      let cssWidth = elements.width.value;
      let cssHeight = elements.height.value;
      let canvasWidth = cssWidth * elements.dpi.value;
      let canvasHeight = cssHeight * elements.dpi.value;
      return (
          <Stage
            width={cssWidth}
            height={cssHeight}
            pixelRatio={elements.dpi.value}>
            <Layer>

            </Layer>
          </Stage>
      );
    }}
  </AppContext.Consumer>
);

export default Canvas;