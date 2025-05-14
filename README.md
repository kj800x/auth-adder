# Auth Adder

A simple reverse proxy that adds a Bearer authentication header to all requests. This proxy is specifically designed to enable no-auth access to the Kubernetes dashboard by automatically injecting the required authentication token.

## Features

- Simple reverse proxy implementation
- Automatic Bearer token injection
- Configurable upstream target
- Docker support
- TypeScript implementation

## Prerequisites

- Node.js 24.0 or later
- npm or yarn
- Docker (optional, for containerized deployment)

## Installation

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/auth-adder.git
cd auth-adder
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

### Docker

Build the Docker image:

```bash
docker build -t auth-adder .
```

## Configuration

The proxy requires the following environment variables:

- `UPSTREAM`: The target URL to proxy requests to (e.g., `https://kubernetes-dashboard.example.com`)
- `BEARER_TOKEN`: The Bearer token to inject into requests
- `PORT`: (Optional) The port to listen on (defaults to 80)

## Usage

### Local Development

1. Set the required environment variables:

```bash
export UPSTREAM=https://your-kubernetes-dashboard
export BEARER_TOKEN=your-token
```

2. Start the proxy:

```bash
npm start
```

### Docker

Run the container:

```bash
docker run -p 8080:8080 \
  -e UPSTREAM=https://your-kubernetes-dashboard \
  -e BEARER_TOKEN=your-token \
  auth-adder
```

## Example Use Case

This proxy is particularly useful for accessing the Kubernetes dashboard without implementing authentication in your application. For example:

1. Deploy the proxy in front of your Kubernetes dashboard
2. Configure the proxy with your Kubernetes service account token
3. Access the dashboard through the proxy without needing to handle authentication

## License

MIT
