"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({car}:CarCardProps) => {
  return (
    <div>{car.model}</div>
  )
}

export default CarCard