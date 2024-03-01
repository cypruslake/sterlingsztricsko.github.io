require([
      "esri/widgets/Sketch",
      "esri/widgets/Home",
      "esri/Map",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView"
    ], (Sketch, Home, Map, GraphicsLayer, MapView) => {
      const graphicsLayer = new GraphicsLayer();

   
      const map = new Map({
        basemap: "topo-vector",
        layers: [graphicsLayer]
       
      });

      const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 8,
        center: [-118.805, 34.072]
      });

      view.when(() => {
        const sketch = new Sketch({
          layer: graphicsLayer,
          view: view,
          creationMode: "update"
        });

        view.ui.add(sketch, "top-right");
      });
   
    const homeBtn = new Home({
          view: view
        });

       
        view.ui.add(homeBtn, "top-left");
      });