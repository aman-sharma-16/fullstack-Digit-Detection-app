from .hyperParameterModulation import hyper_parameters
from .activationFunction import softmax, tanh_activation
from .model import Digit_Image_Classifier
from numpy import array, mean, std


def preprocess_image(x: list):
    image = array(x)
    norm_image = ((image - mean(image)) / std(image)).reshape(1, -1)
    return norm_image


async def predict_Digit(x: list) -> list:
    x = preprocess_image(x)
    y_pred = await Digit_Image_Classifier(
        tanh_activation,
        softmax,
        x,
        w1=hyper_parameters["w1"],
        w2=hyper_parameters["w2"],
        b1=hyper_parameters["b1"],
        b2=hyper_parameters["b2"],
    )

    y_pred_list = y_pred.tolist()
    result = []

    for i in y_pred_list:
        result.append(i.index(1))

    return result


if __name__ == "__main__":
    print(predict_Digit(1))
