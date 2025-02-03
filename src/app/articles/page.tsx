'use client'

import { useEffect, useState } from 'react'
import { fetchReviews, Review, ReviewStatistics } from '@/api/booksy'

function ReviewsComponent() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [statistics, setStatistics] = useState<ReviewStatistics | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true)
        const data = await fetchReviews()
        if (data) {
          setReviews(data.data)
          setStatistics(data.statistics)
        }
      } catch (err) {
        setError('Failed to fetch reviews.')
      } finally {
        setLoading(false)
      }
    }
    loadReviews()
  }, [])

  if (loading) return <p>Loading reviews...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Reviews</h2>
      {statistics && (
        <div>
          <p>Average Rating: {statistics.average_rating}</p>
          <p>Total Reviews: {statistics.total_reviews}</p>
        </div>
      )}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReviewsComponent
