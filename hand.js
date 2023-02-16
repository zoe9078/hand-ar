import * as handTrack from 'handtrackjs';

const defaultParams = {
    flipHorizontal: false,
    outputStride: 16,
    imageScaleFactor: 1,
    maxNumBoxes: 20,
    iouThreshold: 0.2,
    scoreThreshold: 0.6,
    modelType: "ssd320fpnlite",
    modelSize: "large",
    bboxLineWidth: "2",
    fontSize: 17,
};

const model = await handTrack.load(defaultParams)
const video = document. getElementById('videoid');

handTrack.startVideo(video); 
/* start camera input stream on the provided video tag. returns a promise with message format
{ status: false, msg: 'please provide a valid video element' } 
*/
import * as handTrack from 'handtrackjs';

const model =  await handTrack.load();
const predictions = await model.detect(img); 
[
    {
        "class": 2,
        "label": "closed",
        "score": "0.71",
        "bbox": [
            170.54356634616852,
            68.90409886837006,
            204.50245141983032,
            213.6879175901413
        ]
    }
]
model. renderPredictions(predictions, canvas, context, mediasource); 
/* 
canvas: reference to html canvas element where predictions are rendered.
context: canvas 2D context
mediasource: prediction input (img/video/canvas element) 
*/
model.getFPS(); // get FPS calculated as number of detections per second.
model.getModelParameters(); // returns model parameters
model.setModelParameters(params); // updates model parameters with a modelParams object
model.dispose(); //remember dispose your model instance from GPU memory. With Tensorflow.js this does not happen automatically!!  
