import React from 'react';
import ConfigPanel from './components/config-panel';
import AppProvider from './providers/AppProvider';
import CanvasView from './components/canvas-view';

import './App.css';

const App = () => 
  <AppProvider>
    <div className="canvas-editor">
      <div className="canvas-editor__toolbar">
      
      </div>
      <div className="canvas-editor__view">
        <div className="canvas-editor__canvas">
          <CanvasView />
        </div>
        <div className="canvas-editor__panels">
          <ConfigPanel />
        </div>
      </div>
    </div>
  </AppProvider>

export default App;
