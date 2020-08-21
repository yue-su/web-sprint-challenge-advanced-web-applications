import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

export const useApi = (url) => {
    
    const [result, setResult] = useState()

    useEffect(() => {
      axiosWithAuth().get(url).then(res => setResult(res.data))  
    },[url])

    return result
}