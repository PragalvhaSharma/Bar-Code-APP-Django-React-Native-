from rest_framework import serializers
from ..models import Event

class EventModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'name', 'description', 'qr_code', 'date')
