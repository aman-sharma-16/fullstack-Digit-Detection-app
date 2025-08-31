import numpy as np
from numpy import ndarray
from typing import Callable

async def Digit_Image_Classifier(
    tanh_activation: Callable[[ndarray], ndarray],
    softmax : Callable[[ndarray], ndarray],
    x: ndarray,
    w1: ndarray,  # an array of size (9,9)
    w2: ndarray,  # an array of size (9,1)
    b1: ndarray,  # an array of size (9,1)
    b2: ndarray,  # an array of size (1,1)
) -> ndarray:

    xw1 = np.dot(x, w1)  # it gives the dot product of x and w1
    xw1B1 = xw1 + b1  # it adds the bias b1 to xw1

    x2 = tanh_activation(xw1B1)

    x2w2 = np.dot(x2, w2)  # it gives the dot product of x2 and w2

    x2w2B2 = softmax(x2w2 + b2)  # it adds the bias b2 to x2w2
    result = []
    for i in x2w2B2:
        i = np.array([p == max(i) for p in i])
        result.append(i)
    x2w2B2 = np.array(result).astype(np.float32)

    return x2w2B2
