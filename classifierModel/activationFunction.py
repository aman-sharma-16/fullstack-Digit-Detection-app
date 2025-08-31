from numpy import ndarray
import numpy as np


def softmax(x: ndarray) -> ndarray:
    result = []
    for p in x:
        X = np.exp(p)
        X = [(i / sum(X)) for i in X]
        result.append(np.clip(np.array(X), 1e-9, 1 - 1e-9))
    return np.array(result)


def tanh_activation(x: ndarray) -> ndarray:
    """
    Apply the tanh function to each element in the input ndarray.
    """
    eX = np.exp(x)
    e_X = np.exp(-x)

    return (eX - e_X) / (eX + e_X)
