from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Company, Vacancy


# Create your views here.

def company_list(request):
    companies = Company.objects.all()
    data = [company.to_json() for company in companies]
    return JsonResponse(data, safe=False)


def company_detail(request, id):
    company = get_object_or_404(Company, pk=id)
    return JsonResponse(company.to_json())


def vacancies_by_company(request, id):
    company = get_object_or_404(Company, pk=id)
    vacancies = company.vacancies.all()
    data = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(data, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(data, safe=False)


def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, pk=id)
    return JsonResponse(vacancy.to_json())


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(data, safe=False)
