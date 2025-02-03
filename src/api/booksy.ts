// src/api/booksy.ts
import axios from 'axios'

const BASE_URL = 'https://us.booksy.com/public-api/us'
const BUSINESS_ID = '1349497'

interface Review {
  id: number
  rating: number
  comment: string
  // Add other relevant fields based on the API response
}

interface ReviewStatistics {
  average_rating: number
  total_reviews: number
  // Add other relevant fields based on the API response
}

interface ReviewsResponse {
  data: Review[]
  statistics: ReviewStatistics
}

export const fetchReviews = async (): Promise<ReviewsResponse | null> => {
  try {
    const response = await axios.get<ReviewsResponse>(
      `${BASE_URL}/business/${BUSINESS_ID}/review_statistics/`,
      {
        headers: {
          Accept: 'application/json; version=0.2',
          // Include other headers if necessary
        },
      },
    )
    return response.data
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return null
  }
}
