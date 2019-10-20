### Setingup local kubenater
```
minikube start
```

### Apply changes

```sh
kubectl apply -f client-pod.yaml
```
### Get Information

```sh
kubectl get pods
kubectl describe pod client-pod
```

```
kubectl get pods
kubectl get deployments
```