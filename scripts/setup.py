from setuptools import setup, find_packages

setup(
    name="convertiq-detector",
    version="1.0.0",
    description="ConvertIQ AI Content Detection Tools",
    author="ConvertIQ",
    py_modules=["detectiq_detector_v2", "humanizer_v2"],
    scripts=["convertiq-detect", "convertiq-server.py"],
    python_requires=">=3.8",
    install_requires=[
        "numpy>=1.20.0",
    ],
    extras_require={
        "api": ["fastapi", "uvicorn"],
    },
    entry_points={
        "console_scripts": [
            "convertiq-detect=convertiq-detect:main",
        ],
    },
)
