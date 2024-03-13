import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

class ImageClassifier:
    def __init__(self, model_path):
        self.model = load_model(model_path)
        self.class_names = ['Mild Demented', 'Moderate Demented', 'Non Demented', 'Very Mild Demented']

    def predict(self, image_path):
        img = image.load_img(image_path, target_size=(224, 224, 3))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0
        prediction = self.model.predict(img_array)
        predicted_class_index = np.argmax(prediction)
        predicted_class = self.class_names[predicted_class_index]
        confidence = prediction[0][predicted_class_index]
        confidence = int(confidence*100)
        return predicted_class, confidence

# Example usage:
classifier = ImageClassifier('alzheimer_detection_model.h5')
image_path = 'test/MildDemented/26 (21).jpg'
predicted_class, confidence = classifier.predict(image_path)
print(f'Predicted class: {predicted_class}, Confidence: {confidence}%')
print(type(predicted_class))
print(type(confidence))
