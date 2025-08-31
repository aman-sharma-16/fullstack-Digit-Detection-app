"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const GRID_SIZE = 8;
const CELL_SIZE = 35;
const CANVAS_SIZE = GRID_SIZE * CELL_SIZE;
const MIN_VALUE = 10;
const MAX_VALUE = 160;

export default function WritingPad({
  classifyImage,
}: {
  classifyImage: Function;
}) {
  const [grid, setGrid] = useState<number[][]>(() => initializeGrid());
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  function initializeGrid() {
    return Array(GRID_SIZE)
      .fill(0)
      .map(() => Array(GRID_SIZE).fill(0));
  }

  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    grid.forEach((row, y) => {
      row.forEach((cell, x) => {
        const grayValue = cell === 0 ? 0 : cell * 10;
        ctx.fillStyle = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
        ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      });
    });
  }, [grid]);

  useEffect(() => {
    drawGrid();
  }, [drawGrid]);

  const updateCell = useCallback((x: number, y: number) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      const currentValue = newGrid[y][x] * 10;
      const newValue = Math.min(
        MAX_VALUE,
        Math.max(MIN_VALUE, currentValue + 10)
      );
      newGrid[y] = [...newGrid[y]];
      newGrid[y][x] = Math.floor(newValue / 10);
      return newGrid;
    });
  }, []);

  const handleInteraction = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((clientX - rect.left) / CELL_SIZE);
      const y = Math.floor((clientY - rect.top) / CELL_SIZE);

      if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
        updateCell(x, y);
      }
    },
    [updateCell]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      isDrawing.current = true;
      handleInteraction(e.clientX, e.clientY);
    },
    [handleInteraction]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!isDrawing.current) return;
      handleInteraction(e.clientX, e.clientY);
    },
    [handleInteraction]
  );

  const handleMouseUp = useCallback(() => {
    if (isDrawing.current) {
      isDrawing.current = false;
    }
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      isDrawing.current = true;
      const touch = e.touches[0];
      handleInteraction(touch.clientX, touch.clientY);
    },
    [handleInteraction]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      if (!isDrawing.current) return;
      const touch = e.touches[0];
      handleInteraction(touch.clientX, touch.clientY);
    },
    [handleInteraction]
  );

  const handleTouchEnd = useCallback(() => {
    if (isDrawing.current) {
      isDrawing.current = false;
    }
  }, []);

  const resetGrid = useCallback(() => {
    setGrid(initializeGrid());
  }, []);

  const handleSubmit = () => {
    const num_array: number[] = grid.flat(1);
    classifyImage(num_array);
  };

  return (
    <div className="relative bg-zinc-900 h-[50dvh] mx-auto flex flex-col justify-center items-center gap-y-8">
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="cursor-pointer touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => {
          handleMouseUp();
          handleSubmit();
        }}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => {
          handleTouchEnd();
          handleSubmit();
        }}
      />
      <button
        className="bg-gray-300 rounded-full w-40 h-8 absolute ml-[600px]"
        onClick={resetGrid}
      >
        Reset Grid
      </button>
    </div>
  );
}
