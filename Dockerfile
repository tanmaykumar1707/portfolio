FROM nginx:alpine

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy your custom HTML into Nginx's root directory
COPY src/ /usr/share/nginx/html/

EXPOSE 80
