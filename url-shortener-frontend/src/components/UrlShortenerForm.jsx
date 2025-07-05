import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../API/config/env';

const UrlShortenerForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShortUrl('');
    setError('');

    try {
      const response = await axios.post(`${API_BASE_URL}/url`, {
        longUrl,
      });

      // Reconstruct frontend URL from base without `/api`
      const baseFrontendUrl = API_BASE_URL.replace('/api', '');
      setShortUrl(`${baseFrontendUrl}/${response.data.shortCode}`);
    } catch (err) {
      console.error(err);
      setError('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Raccourcisseur d’URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Collez votre URL longue ici"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button type="submit">Raccourcir</button>
      </form>

      {shortUrl && (
        <div style={{ marginTop: '20px' }}>
          <strong>URL raccourcie :</strong>{' '}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UrlShortenerForm;
